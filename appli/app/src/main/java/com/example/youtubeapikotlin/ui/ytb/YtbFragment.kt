package com.example.youtubeapikotlin.ui.ytb

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.youtubeapikotlin.R
import com.example.youtubeapikotlin.databinding.FragmentYoutubeBinding
import com.example.youtubeapikotlin.adapter.VideoAdapter

class YtbFragment : Fragment() {

    private var _binding: FragmentYoutubeBinding? = null
    private val binding get() = _binding!!
    private var ytbViewModel: YtbViewModel? = null
    private val adapter = VideoAdapter()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.rvVideo.adapter = adapter
        binding.rvVideo.layoutManager = LinearLayoutManager(requireContext())

        ytbViewModel?.video?.observe(viewLifecycleOwner, {
            if (it != null && it.items.isNotEmpty()){
                adapter.setData(it.items)
            }
        })

    }
    override fun onCreateView(
            inflater: LayoutInflater,
            container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View {
        ytbViewModel =
                ViewModelProvider(this).get(YtbViewModel::class.java)
        _binding = FragmentYoutubeBinding.inflate(inflater, container, false)
        return binding.root
    }
}