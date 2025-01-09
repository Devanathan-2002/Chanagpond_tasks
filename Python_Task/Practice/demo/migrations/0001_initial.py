# Generated by Django 4.2.17 on 2025-01-01 12:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='chef',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('address', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='dish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('rating', models.IntegerField(max_length=5)),
                ('is_bestselling', models.BooleanField()),
                ('price', models.IntegerField(max_length=1000)),
                ('chef', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='demo.chef')),
            ],
        ),
    ]