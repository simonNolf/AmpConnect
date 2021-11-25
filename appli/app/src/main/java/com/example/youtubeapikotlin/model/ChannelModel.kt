package com.example.youtubeapikotlin.model

import android.provider.ContactsContract
import androidx.annotation.Keep
import com.google.gson.annotations.SerializedName

@Keep
data class ChannelModel(

    @SerializedName("items")
    val items: List<Items>
) {
    class Items (

        @SerializedName("id")
        val id: String,

        @SerializedName("snippet")
        val snippet: SnippetYtb
    )
}