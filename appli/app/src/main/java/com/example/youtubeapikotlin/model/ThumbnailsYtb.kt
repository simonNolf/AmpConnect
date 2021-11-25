package com.example.youtubeapikotlin.model

import androidx.annotation.Keep
import com.google.gson.annotations.SerializedName

@Keep
data class ThumbnailsYtb (
    @SerializedName("high")
    val high: String,

        ){
    data class High(
        @SerializedName("url")
        val url: String
    )
}
