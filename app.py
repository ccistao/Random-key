from flask import Flask, request, jsonify
import yt_dlp

app = Flask(__name__)

@app.route('/dl', methods=['GET'])
def download_audio():
    video_id = request.args.get('id')
    if not video_id:
        return jsonify({"status": "fail", "msg": "Thieu ID bai hat"}), 400

    url = f"https://www.youtube.com/watch?v={video_id}"
    
    # Cấu hình bốc link âm thanh siêu tốc
    ydl_opts = {
        'format': 'bestaudio/best',
        'quiet': True,
        'no_warnings': True,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            audio_link = info.get('url') # Rút link HTTPS sạch trực tiếp từ Google
            
            return jsonify({
                "status": "ok",
                "link": audio_link,
                "title": info.get('title', 'Unknown')
            })
    except Exception as e:
        return jsonify({
            "status": "fail",
            "msg": str(e)
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
