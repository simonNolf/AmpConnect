package com.example.youtubeapikotlin.ui.ytb

import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.youtubeapikotlin.model.ChannelModel
import com.example.youtubeapikotlin.model.VideoYtModel
import com.example.youtubeapikotlin.network.ApiConfig
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class YtbViewModel : ViewModel() {

    private val _video = MutableLiveData<VideoYtModel?>()
    val video = _video
    private val _isLoading = MutableLiveData<Boolean>()
    val isLoading = _isLoading
    private val _message = MutableLiveData<String>()
    val message = _message

    init {
        getVideoList()
    }

    private fun getVideoList(){
        _isLoading.value = true
        // snippet sans doute useless et id de la vidéo youtube que on veux afficher !
        val client = ApiConfig.getServices().getVideo("snippet", "UCT9zcQNlyht7fRlcjmflRSA","date")
        client.enqueue(object : Callback<VideoYtModel> {
            override fun onResponse(call: Call<VideoYtModel>, response: Response<VideoYtModel>) {
                _isLoading.value = false
                if (response.isSuccessful){
                    val data = response.body()
                    if(data != null && data.items.isNotEmpty()){
                        _video.value = data
                    }else{
                        _message.value = "no video"
                    }
                }else{
                    _message.value = response.message()
                }
            }

            override fun onFailure(call: Call<VideoYtModel>, t: Throwable) {
                _isLoading.value = false
                Log.e(TAG,"Failed",t)
                _message.value = t.message
            }
        })
    }

    companion object{
        private val TAG = YtbViewModel::class.java.simpleName
    }
}