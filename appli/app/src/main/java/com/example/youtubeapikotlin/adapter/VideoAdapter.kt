package com.example.youtubeapikotlin.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.youtubeapikotlin.databinding.ItemVideoBinding
import com.example.youtubeapikotlin.model.VideoYtModel
import com.example.youtubeapikotlin.diffutils.VideoDiffUtil



class VideoAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    private var oldItems = emptyList<VideoYtModel.VideoItem>()

    class VideoHolder(itemView: ItemVideoBinding) : RecyclerView.ViewHolder(itemView.root){
        private val binding = itemView

        fun setData(data: VideoYtModel.VideoItem){
            binding.tvVideoTitle.text = data.snippetYtb.title
            binding.tvPublished.text = data.snippetYtb.publishedAt
            Glide.with(binding.root)
                .load(data.snippetYtb.thumbnails.high.url)
                .into(binding.ivThumbnail)
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val view = ItemVideoBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return VideoHolder(view)
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        (holder as VideoHolder).setData(oldItems[position])
    }

    override fun getItemCount(): Int {
        return oldItems.size
    }

    fun setData(newList: List<VideoYtModel.VideoItem>){
        val videoDiff = VideoDiffUtil(oldItems, newList)
        val diff = DiffUtil.calculateDiff(videoDiff)
        oldItems = newList
        diff.dispatchUpdatesTo(this)
    }

}