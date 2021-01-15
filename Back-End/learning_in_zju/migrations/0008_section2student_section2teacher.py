# Generated by Django 3.0.3 on 2020-12-28 04:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learning_in_zju', '0007_course_course_info'),
    ]

    operations = [
        migrations.CreateModel(
            name='Section2Teacher',
            fields=[
                ('section_user_id', models.AutoField(primary_key=True, serialize=False, verbose_name='课程教师关系编号')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('modify_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('section_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='learning_in_zju.Section', verbose_name='教学班编号')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='learning_in_zju.User', verbose_name='用户学工号')),
            ],
            options={
                'verbose_name_plural': '教学班教师表',
                'db_table': 'section2teacher_sre',
            },
        ),
        migrations.CreateModel(
            name='Section2Student',
            fields=[
                ('section_user_id', models.AutoField(primary_key=True, serialize=False, verbose_name='课程学生关系编号')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('modify_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('section_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='learning_in_zju.Section', verbose_name='教学班编号')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='learning_in_zju.User', verbose_name='用户学工号')),
            ],
            options={
                'verbose_name_plural': '教学班学生表',
                'db_table': 'section2student_sre',
            },
        ),
    ]