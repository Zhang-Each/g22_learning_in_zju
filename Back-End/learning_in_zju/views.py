from django.http import HttpResponse
from django.shortcuts import render
import json
from . import models
from django.contrib.sessions.models import Session


# Create your views here.

def check_login(request):
    """
    登录时的验证函数
    :param request:
    :return: 如果登陆成功就保存session并返回一个成功的标志{"login": True}，否则返回{"login": False}
    """
    res = {"login": True}
    if request.method == "POST":
        # 生成json形式的登陆数据，包括用户名和密码
        login_data = json.loads(request.body)
        check = models.User.objects.filter(user_id=login_data["name"], user_password=login_data["password"])
        if len(check) == 1:
            # 登陆成功的情况，数据库中密码和账号完全匹配的都只有一个
            user = check.first()
            # session操作，可能有问题
            # 获取了一个session所需要的两个值，即账号id和用户类型kind，其中0123分别代表管理、学生、老师、助教
            session_value = {"id": user.user_id, "kind": user.user_kind}
            # 在返回的HTTP请求中写入session
            request.session.create()
            request.session["user_info"] = session_value
            request.session["is_login"] = True
            res["session_id"] = request.session.session_key
            return HttpResponse(json.dumps(res), content_type='application/json')
        res["login"] = False
        check1 = models.User.objects.filter(user_id=login_data["name"])
        if len(check1) == 1:
            res["wrong_password"] = True
        else:
            res["id_not_exist"] = True
    # 其他情况下都是登陆失败
    return HttpResponse(json.dumps(res), content_type='application/json')


def check_session(request):
    """
    检查是否有session的api，如果有则返回用户的id和类型，如果没有则返回错误信息
    :param request: HTTP请求
    :return: 如果有则返回用户的id和类型，如果没有则返回错误信息
    """
    session_id = request.GET["session_id"]
    if session_id == "null":
        user_info = {"id": False}
        return HttpResponse(json.dumps(user_info), content_type='application/json')
    obj = Session.objects.get(pk=session_id)
    session = obj.get_decoded()
    if session["is_login"]:
        return HttpResponse(json.dumps(session["user_info"]), content_type='application/json')
    else:
        user_info = {"id": False}
        return HttpResponse(json.dumps(user_info), content_type='application/json')


def get_all_notice(request):
    """
    根据用户的id获取该人所有的通知信息
    :param request: HTTP请求，包含用户的id
    :return: 所有该用户的通知
    """
    res = {"success": True, "notice": []}
    if request.method == "GET":
        query_id = json.loads(request.body)
        all_notice = models.Notice.objects.filter(user_id=query_id)
        for single_notice in all_notice:
            single_notice_in_json = {
                "notice_id": single_notice.notice_id, "course_id": single_notice.course_id,
                "section_id": single_notice.section_id, "user_id": single_notice.user_id,
                "title": single_notice.title, "content": single_notice.content,
                "publish_time": single_notice.publish_time
            }
            res["notice"].append(single_notice_in_json)
        return HttpResponse(json.dumps(res), content_type='application/json')
    res["success"] = False
    return HttpResponse(json.dumps(res), content_type='application/json')


def get_self_information(request):
    """
    通过用户的id获取用户的个人信息
    :param request:
    :return: 用户的个人信息，以json形式来存储
    """
    res = {"success": True, "info": {}}
    if request.method == "POST":
        query_id = json.loads(request.body)["id"]
        self_info = models.User.objects.get(user_id=query_id)
        res["info"] = {
            "user_id": self_info.user_id,
            "name": self_info.name,
            "email": self_info.email,
            "introduce": self_info.introduction,
            "department": self_info.department,
            "major": self_info.major_class,
            "kind": self_info.user_kind
        }
        return HttpResponse(json.dumps(res), content_type='application/json')
    res["success"] = False
    return HttpResponse(json.dumps(res), content_type='application/json')


def get_student_course_list(request):
    """
    通过学生用户的id来获取所有有用户参加的课程班级的列表
    :param request:
    :return: 用户参加的所有课程
    """
    res = {"success": True, "course": []}
    if request.method == "POST":
        id = json.loads(request.body)["id"]
        section_id_list = models.Section2Student.objects.filter(user_id=id)
        for section in section_id_list:
            section_id = section.section_id
            course_id = models.Section.objects.get(section_id=section_id)
            course_name = models.Course.objects.get(course_id=course_id).course_name
            class_info = {
                "name": course_name,
                "class": section_id,
                "course_id": course_id
            }
            res["course"].append(class_info)
    else:
        res["success"] = False
    return HttpResponse(json.dumps(res), content_type='application/json')


def get_teacher_course_list(request):
    """
        通过教师用户的id来获取所有有用户参加的课程班级的列表
        :param request:
        :return: 用户参加的所有课程
        """
    res = {"success": True, "course": []}
    if request.method == "POST":
        id = json.loads(request.body)["id"]
        section_id_list = models.Section2Teacher.objects.filter(user_id=id)
        for section in section_id_list:
            section_id = section.section_id
            course_id = models.Section.objects.get(section_id=section_id)
            course_name = models.Course.objects.get(course_id=course_id).course_name
            class_info = {
                "name": course_name,
                "class": section_id,
                "course_id": course_id
            }
            res["course"].append(class_info)
    else:
        res["success"] = False
    return HttpResponse(json.dumps(res), content_type='application/json')


# def get_section_info(request):

def add_new_notice(request):
    """
    添加新的通知
    :param request:HTTP请求，包含了新的通知的信息和session
    :return:成功信息或者失败信息
    """
    res = {"success": True}
    if request.method == "POST":
        info_dict = json.loads(request.body)
        notice_id = len(models.Notice.objects.all()) + 1
        title, content, time = info_dict["notice"]["title"], \
                               info_dict["notice"]["content"], \
                               info_dict["notice"]["publish_time"]
        course_id, section_id = info_dict["notice"]["course_id"], info_dict["notice"]["section_id"]
        session_id = info_dict["session_id"]
        user_id = Session.objects.get(pk=session_id).get_decoded()["id"]
        models.Notice.objects.create(
            notice_id=notice_id,
            course_id=course_id,
            section_id=section_id,
            title=title,
            content=content,
            publish_time=time,
            user_id=user_id
        )
    return HttpResponse(json.dumps(res), content_type='application/json')
