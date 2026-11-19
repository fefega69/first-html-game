@echo off
echo Starting the local game server...
echo Leave this window open while playing!
echo.

:: 1. Start the Python server in the background
start /b python -m http.server 8000

:: 2. Wait 2 seconds to let the server initialize
timeout /t 2 /nobreak >nul

:: 3. Open the browser once the server is alive
start "" http://localhost:8000

:: 4. Keep the command window alive so the server doesn't instantly close
pause