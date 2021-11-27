package com.example.youtubeapikotlin.ui.home

import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.youtubeapikotlin.model.ChannelModel
import com.example.youtubeapikotlin.network.ApiConfig
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class HomeViewModel : ViewModel() {

    private val _channel = MutableLiveData<ChannelModel?>()
    val channel = _channel
    private val _isLoading = MutableLiveData<Boolean>()
    val isLoading = _isLoading
    private val _message = MutableLiveData<String>()
    val message = _message

    init {
        getChannel()
    }

    private fun getChannel(){
        _isLoading.value = true
        // snippet sans doute useless et id de la vidéo youtube que on veux afficher !
        val client = ApiConfig.getServices().getChannel("snippet", "UCT9zcQNlyht7fRlcjmflRSA")
        client.enqueue(object : Callback<ChannelModel> {
            override fun onResponse(call: Call<ChannelModel>, response: Response<ChannelModel>) {
                _isLoading.value = false
                if (response.isSuccessful){
                    val data = response.body()
                    if(data != null && data.items.isNotEmpty()){
                        _channel.value = data
                    }else{
                        _message.value = "no channel"
                    }
                }else{
                    _message.value = response.message()
                }
            }

            override fun onFailure(call: Call<ChannelModel>, t: Throwable) {
                _isLoading.value = false
                Log.e(TAG,"Failed",t)
                _message.value = t.message
            }
        })
    }

    companion object{
        private val TAG = HomeViewModel::class.java.simpleName
    }
}