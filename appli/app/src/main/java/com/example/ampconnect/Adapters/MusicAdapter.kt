package com.example.ampconnect.Adapters

import android.content.Context
import android.graphics.Bitmap
import android.provider.MediaStore
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.ampconnect.Modes.SongModel
import com.example.ampconnect.R
import kotlinx.android.synthetic.main.music_layout.view.*

class MusicAdapter(var songList: ArrayList<SongModel>, var context: Context) :
    RecyclerView.Adapter<MusicAdapter.ViewHolder>() {

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var song_tittle = itemView.song_tittle
        var song_artist = itemView.song_artist
        var song_image = itemView.song_image


    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(
            LayoutInflater.from(parent.context).inflate(R.layout.music_layout, parent, false)
        )
    }

    override fun getItemCount(): Int {
        return songList.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.song_tittle.text = songList[position].song_tittle
        holder.song_artist.text = songList[position].artist
        var bitmap: Bitmap?=null
        try{
bitmap=MediaStore.Images.Media.getBitmap(context.contentResolver,songList[position].image)
            holder.song_image.setImageBitmap(bitmap)
        }catch (e: Exception){

        }


    }


}