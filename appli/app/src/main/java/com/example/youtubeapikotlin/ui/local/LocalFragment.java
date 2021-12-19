package com.example.youtubeapikotlin.ui.local;


import android.annotation.SuppressLint;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;


import androidx.fragment.app.Fragment;

import com.example.youtubeapikotlin.R;

import java.util.concurrent.TimeUnit;


public class LocalFragment extends Fragment {


    Button play;
    TextView playerDuration, playerposition;
    SeekBar seekBar;
    MediaPlayer mediaplayer;
    Handler handler = new Handler();
    Runnable runnable;
    int[] images = {R.drawable.play, R.drawable.pause};
    int i = 0;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_local, container, false);
        play = rootView.findViewById(R.id.playBtn);
        seekBar = rootView.findViewById(R.id.positionBar);
        mediaplayer = new MediaPlayer();
        playerposition = rootView.findViewById(R.id.elapsedTimeLabel);
        playerDuration = rootView.findViewById(R.id.remainingTimeLabel);
        final MediaPlayer sound = MediaPlayer.create(getActivity(), R.raw.song);
        runnable = new Runnable() {
            @Override
            public void run() {
                seekBar.setProgress(sound.getCurrentPosition());
                handler.postDelayed(this, 500);
            }
        };
        int duration = sound.getDuration();
        String sDuration = convertFormat(duration);
        playerDuration.setText(sDuration);

        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser) {
                    mediaplayer.seekTo(progress);
                }
                playerposition.setText(convertFormat(sound.getCurrentPosition()));
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });



        play.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int currentPosition = sound.getCurrentPosition();
                int duration = sound.getDuration();
                if(sound.isPlaying() &&  duration != currentPosition){
                    currentPosition = currentPosition + 5000;
                    playerposition.setText(convertFormat(currentPosition));
                    sound.seekTo(currentPosition);
                }
                seekBar.setMax(sound.getDuration());
                sound.setLooping(true);
                handler.postDelayed(runnable, 0);
                sound.start();
                play.setBackgroundResource(images[i]);
                i++;
                if (i == 2) {
                    i = 0;
                }
                if (i % 2 == 1) {
                    sound.pause();
                    handler.removeCallbacks(runnable);
                }
            }

        });


        return rootView;

    }

    @SuppressLint("DefaultLocale")
    private String convertFormat(int duration) {
        return String.format("%02d:%02d",
                TimeUnit.MILLISECONDS.toMinutes(duration),
                 TimeUnit.MILLISECONDS.toSeconds(duration)
                         - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes(duration)));
    }

}