# Generated by Django 3.2.19 on 2025-01-07 06:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_alter_book_author'),
        ('author', '0002_authorcls'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Author',
        ),
    ]
