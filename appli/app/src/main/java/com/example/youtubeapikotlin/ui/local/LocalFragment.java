package com.example.youtubeapikotlin.ui.local;


import android.annotation.SuppressLint;
import android.icu.util.ICUUncheckedIOException;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.SeekBar;
import android.widget.TextView;


import androidx.fragment.app.Fragment;

import com.example.youtubeapikotlin.R;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;


public class LocalFragment extends Fragment {


    Button play, next, previous;
    TextView playerDuration, playerposition, titre;
    ImageView image;
    SeekBar seekBar;
    MediaPlayer mediaplayer;
    Handler handler = new Handler();
    Runnable runnable;
    MediaPlayer sound;
    int[] images = {R.drawable.play, R.drawable.pause};
    int i = 0;
    int currentIndex = 0;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_local, container, false);
        play = rootView.findViewById(R.id.playBtn);
        next = rootView.findViewById(R.id.next);
        previous = rootView.findViewById(R.id.previous);
        image = rootView.findViewById(R.id.image);
        seekBar = rootView.findViewById(R.id.positionBar);
        mediaplayer = new MediaPlayer();
        playerposition = rootView.findViewById(R.id.elapsedTimeLabel);
        playerDuration = rootView.findViewById(R.id.remainingTimeLabel);
        titre = rootView.findViewById(R.id.titre);
        ArrayList<Integer> songs = new ArrayList<>();

        songs.add(0,R.raw.song);
        songs.add(1, R.raw.thunder);
        songs.add(2,R.raw.enemy);
        sound = MediaPlayer.create(getActivity(), songs.get(currentIndex));
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
                songNames();
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
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(sound!=null){
                    play.setBackgroundResource(images[1]);
                    i = 0;
                }
                if(currentIndex < songs.size() - 1){
                    currentIndex ++;
                }else
                {
                    currentIndex = 0;
                }
                if (sound.isPlaying()){
                    sound.stop();
                }
                sound = MediaPlayer.create(getActivity(),songs.get(currentIndex));
                sound.start();
                songNames();

            }
        });
        previous.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (sound!=null){
                    play.setBackgroundResource(images[1]);
                    i = 0;
                }
                if (currentIndex>0){
                    currentIndex--;
                }else{
                    currentIndex = songs.size() -1;
                }
                if (sound.isPlaying()){
                    sound.stop();
                }
                sound = MediaPlayer.create(getActivity(),songs.get(currentIndex));
                sound.start();
                songNames();
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

    private void songNames(){
        if (currentIndex == 0){
             titre.setText("test");
             image.setImageResource(R.drawable.sablier);
        }
        if (currentIndex == 1){
            titre.setText("imagine Dragon - Thunder");
            image.setImageResource(R.drawable.thunder);
        }
        if (currentIndex == 2){
            titre.setText("imagine Dragon - Enemy");
            image.setImageResource(R.drawable.enemy);
        }
    }
}