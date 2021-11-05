package com.example.myapplication.ui.youtube

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.example.myapplication.databinding.FragmentYoutubeBinding

class YoutubeFragment : Fragment() {

    private lateinit var youtubeViewModel: YoutubeViewModel
    private var _binding: FragmentYoutubeBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        youtubeViewModel =
            ViewModelProvider(this).get(YoutubeViewModel::class.java)

        _binding = FragmentYoutubeBinding.inflate(inflater, container, false)
        val root: View = binding.root

        val textView: TextView = binding.textYoutube
        youtubeViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })
        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}