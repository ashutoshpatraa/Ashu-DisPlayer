
import WebSocket from 'ws';

console.log('Testing WebSocket...');
try {
    const ws = new WebSocket('wss://echo.websocket.org', {
        headers: { 'Authorization': 'test' }
    });
    ws.on('open', () => {
        console.log('Open success');
        ws.close();
    });
    ws.on('error', (err) => {
        console.error('Error:', err);
    });
} catch (e) {
    console.error('Error constructing:', e);
}
