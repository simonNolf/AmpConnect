package com.example.youtubeapikotlin.ui.notifications

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class NotificationsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "ICI Paramètre interface"
    }
    val text: LiveData<String> = _text
}