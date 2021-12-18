package com.example.youtubeapikotlin.ui.local;


import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
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
    Runnable runnable;
    Handler handler;
    MediaPlayer mediaplayer;
    int images[] = {R.drawable.play, R.drawable.pause};
    int i = 0;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_local, container, false);

        play = (Button) rootView.findViewById(R.id.playBtn);
        seekBar = rootView.findViewById(R.id.positionBar);
        handler = new Handler();
        mediaplayer = new MediaPlayer();
        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser) {
                    mediaplayer.seekTo(progress);
                    seekBar.setProgress(progress);
                }
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });


        final MediaPlayer sound = MediaPlayer.create(getActivity(), R.raw.song);
        play.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                seekBar.setMax(sound.getDuration());
                sound.setLooping(true);
                sound.start();
                play.setBackgroundResource(images[i]);
                i++;
                if(i==2) {
                    i = 0;
                }



            }
        });


        return rootView;

    }

}