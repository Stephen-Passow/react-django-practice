from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100, default='n/a')
    photo_url = models.TextField(default='n/a')
    nationality = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Song(models.Model):
    title = models.CharField(max_length=255, default='n/a')
    album = models.CharField(max_length=255, default='n/a')
    preview_url = models.TextField(default='n/a')
    artist = models.ForeignKey(Artist,on_delete=models.CASCADE, related_name='songs')

    def __str__(self):
        return self.title

