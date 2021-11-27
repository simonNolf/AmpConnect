package com.example.youtubeapikotlin.network

import com.example.youtubeapikotlin.model.ChannelModel
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query

interface ApiServices {
    //pas channel mais videos , pass de part mais un id puis le key api
    @GET("channels")
    fun getChannel(
        @Query("part") part: String,
        @Query("id") id: String,

        ): Call<ChannelModel>
}