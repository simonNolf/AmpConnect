package com.example.youtubeapikotlin.ui.local

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import kotlinx.android.synthetic.main.fragment_local.*

class LocalViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
    }
    val text: LiveData<String> = _text

    
}