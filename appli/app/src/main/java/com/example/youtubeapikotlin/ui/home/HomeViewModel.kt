package com.example.youtubeapikotlin.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class HomeViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "ICI Youtube interface"
    }
    val text: LiveData<String> = _text
}