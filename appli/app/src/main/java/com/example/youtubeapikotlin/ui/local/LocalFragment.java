package com.example.youtubeapikotlin.ui.local;


import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.SeekBar;

import androidx.fragment.app.Fragment;
import com.example.youtubeapikotlin.R;

public class LocalFragment extends Fragment {

    Button play;
    SeekBar seekBar;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_local, container, false);

    play = (Button) rootView.findViewById(R.id.playBtn);
    seekBar = rootView.findViewById(R.id.positionBar);

    final MediaPlayer sound = MediaPlayer.create(getActivity(), R.raw.song);
    play.setOnClickListener(new View.OnClickListener(){
        @Override
        public void onClick(View v){
            sound.setLooping(true);
            sound.start();
        }
    });

    return rootView;

    }

}