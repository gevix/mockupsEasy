# Generated by Django 5.0.3 on 2024-03-05 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_mockuptemplate_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mockuptemplate',
            name='category',
            field=models.ManyToManyField(blank=True, related_name='mockuptemplate_set', to='api.category'),
        ),
    ]
