package com.example.youtubeapikotlin.network

import com.example.youtubeapikotlin.model.ChannelModel
import com.example.youtubeapikotlin.model.VideoYtModel
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query
import java.nio.ByteOrder

interface ApiServices {
    //pas channel mais videos , pass de part mais un id puis le key api
    @GET("channels")
    fun getChannel(
        @Query("part") part: String,
        @Query("id") id: String,

        ): Call<ChannelModel>

    @GET("search")
    fun getVideo(
        @Query("part") part: String,
        //a ptt modif pour l'id de la vidéo ! A VOIR
        @Query("channelId") channelId: String,
        @Query("order") order: String,
        @Query("pageToken") pageToken: String?
    ): Call<VideoYtModel>
}