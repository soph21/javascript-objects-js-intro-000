var playlist = { artistnames: 'song titles'}
function updatePlaylist (playlist, artistName,songTitle) {
playlist['Phil Ochs']= 'Slowdive'
  return playlist
}
function removeFromPlaylist(playlist, artistName, 'Phil Ochs', 'My Bloody Valentine') {
  delete playlist['Phil Ochs']
  return playlist['My Bloody Valentine']= 'When you Sleep'
}
