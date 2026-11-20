@echo off
cd /d "%~dp0"
echo Starting portfolio dev server...
start "Portfolio Dev Server" cmd /k "npm run dev"
timeout /t 4 /nobreak >nul
start "" http://localhost:5173
echo.
echo Browser opened at http://localhost:5173
echo Close the "Portfolio Dev Server" window to stop the server.
pause
