# Generated by Django 4.2.17 on 2025-01-06 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogger', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='slug',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
