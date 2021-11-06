package com.example.ampconnect

import android.content.ContentUris
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.ampconnect.Adapters.MusicAdapter
import com.example.ampconnect.Modes.SongModel
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    lateinit var list: ArrayList<SongModel>
    lateinit var adapter: MusicAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var manager = LinearLayoutManager(applicationContext)
        list = ArrayList()
        recyclerview.layoutManager = manager
        adapter = MusicAdapter(list, applicationContext)
        recyclerview.adapter = adapter
        getSongs()
    }

    private fun getSongs() {
        list.clear()
        val contentResolver = this.contentResolver
        var songUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI
        var cursor = contentResolver.query(songUri, null, null, null, null)
        if (cursor != null && cursor.moveToFirst()) {
            val songId = cursor.getColumnIndex(MediaStore.Audio.Media._ID)
            val songTittle = cursor.getColumnIndex(MediaStore.Audio.Media.TITLE)
            val songArtist = cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST)
            val songData = cursor.getColumnIndex(MediaStore.Audio.Media.DATA)
            val date = cursor.getColumnIndex(MediaStore.Audio.Media.DATE_ADDED)
            val albumColumn = cursor.getColumnIndex(MediaStore.Audio.Media.ALBUM_ID)
            while (cursor.moveToNext()) {
                val currentId = cursor.getLong(songId)
                val song_tittle = cursor.getString(songTittle)
                val song_artist = cursor.getString(songArtist)
                val song_data = cursor.getString(songData)
                val song_date = cursor.getLong(date)
                val albumId = cursor.getLong(albumColumn)

                val IMAGE_URI = Uri.parse("content://media/external/audio/albumart")
                val album_uri = ContentUris.withAppendedId(IMAGE_URI, albumId)

                if (!song_artist.equals("<unknown>")) {
                    list.add(
                        SongModel(
                            currentId,
                            song_tittle,
                            song_artist,
                            song_data,
                            song_date,
                            album_uri
                        )
                    )
                }

            }
            adapter.notifyDataSetChanged()

        }
    }
}