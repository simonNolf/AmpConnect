package com.example.myapplication

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.view.WindowManager
import android.widget.Toast
import androidx.core.app.ActivityCompat

class LocalFragment : AppCompatActivity() {
    var permissions = arrayOf(
        Manifest.permission.READ_EXTERNAL_STORAGE,
        Manifest.permission.MODIFY_AUDIO_SETTINGS
    )
    val permissionCode = 10001

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        )
        setContentView(R.layout.activity_local_fragment)

        if (checkPermission()) {
            goHome()
        } else {
            ActivityCompat.requestPermissions(this@LocalFragment, permissions, permissionCode)
        }


    }

    private fun checkPermission(): Boolean {
        for (perms: String in permissions) {
            var data: Int = application.checkCallingOrSelfPermission(perms)
            if (data != PackageManager.PERMISSION_GRANTED) {
                return false
            }
        }
        return true
    }

    private fun goHome() {
        Handler().postDelayed({
            startActivity(Intent(applicationContext, MainActivity::class.java))
        }, 5000)
        finish()
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)

        when (requestCode) {
            permissionCode -> {
                if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED && grantResults[1] == PackageManager.PERMISSION_GRANTED) {
                    goHome()
                } else {
                    showToast("Please Grant Permissions")
                }
            }
            else -> {
                showToast("Error Occurred")
            }
        }
    }

    private fun showToast(msg: String) {
        Toast.makeText(applicationContext, msg, Toast.LENGTH_SHORT).show()
        finish()
    }

}

