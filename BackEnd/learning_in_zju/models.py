from django.db import models


# Create your models here.
# 用户表
class User(models.Model):
    user_id = models.CharField(primary_key=True, max_length=12, verbose_name=u'学工号')
    user_password = models.CharField(max_length=20, verbose_name=u'登录密码', default='123456')
    name = models.CharField(max_length=20, verbose_name=u'用户名')
    email = models.CharField(max_length=64, verbose_name=u'用户邮箱', default='无')
    introduction = models.CharField(max_length=512, verbose_name=u'个人介绍', default='无')
    user_kind = models.IntegerField(verbose_name=u'用户类型', default=1)
    department = models.CharField(max_length=64, verbose_name=u'院系', default='无')
    major_class = models.CharField(max_length=64, verbose_name=u'专业班级（为学生时有效）', default='无')
    last_login_time = models.DateTimeField(verbose_name=u'最后登录时间')
    homework_not_corrected = models.IntegerField(null=True, verbose_name=u'教师/助教未批改作业数')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name=u'创建时间')  # 第一次保存时记录时间
    modify_time = models.DateTimeField(auto_now=True, verbose_name=u'修改时间')

    class Meta:
        # managed = False  # false 为False的时候，不会对数据库表进行创建、删除等操作 可以用于现有表、数据库视图等
        db_table = 'User'
        verbose_name_plural = '用户表'


class Course(models.Model):
    course_id = models.CharField(primary_key=True, max_length=12, verbose_name=u'课程编号')
    course_name = models.CharField(max_length=64, verbose_name=u'课程名称')
    credit = models.FloatField(verbose_name=u'学分')
    department = models.CharField(max_length=64, verbose_name=u'开课学院')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name=u'创建时间')  # 第一次保存时记录时间
    modify_time = models.DateTimeField(auto_now=True, verbose_name=u'修改时间')

    class Meta:
        # managed = False  # false 为False的时候，不会对数据库表进行创建、删除等操作 可以用于现有表、数据库视图等
        db_table = 'Course'
        verbose_name_plural = '课程表'


class Section(models.Model):
    section_id = models.CharField(primary_key=True, max_length=16, verbose_name=u'教学班编号')
    course_id = models.ForeignKey(Course, on_delete=models.DO_NOTHING, verbose_name=u'课程编号')
    startTime = models.DateField(verbose_name=u'开始时间')
    endTime = models.DateField(null=True, verbose_name=u'结束时间')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name=u'创建时间')  # 第一次保存时记录时间
    modify_time = models.DateTimeField(auto_now=True, verbose_name=u'修改时间')

    class Meta:
        # managed = False  # false 为False的时候，不会对数据库表进行创建、删除等操作 可以用于现有表、数据库视图等
        db_table = 'Section'
        verbose_name_plural = '教学班表'


class Notice(models.Model):
    notice_id = models.AutoField(primary_key=True, verbose_name=u'通知编号')
    course_id = models.ForeignKey(Course, on_delete=models.DO_NOTHING, verbose_name=u'课程编号')
    section_id = models.ForeignKey(Section, on_delete=models.DO_NOTHING, verbose_name=u'班级编号')
    user_id = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name=u'用户编号')
    title = models.CharField(max_length=50, verbose_name=u'通知标题')
    content = models.CharField(max_length=512, verbose_name=u'通知内容')
    publish_time = models.DateTimeField(verbose_name='发布时间')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name=u'创建时间')  # 第一次保存时记录时间
    modify_time = models.DateTimeField(auto_now=True, verbose_name=u'修改时间')

    class Meta:
        # managed = False  # false 为False的时候，不会对数据库表进行创建、删除等操作 可以用于现有表、数据库视图等
        db_table = 'Notice'
        verbose_name_plural = '课程通知表'
