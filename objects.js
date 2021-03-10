var playlist = { artistnames: 'song titles'}
function updatePlaylist (playlist, artistName,songTitle) {
playlist['Phil Ochs']= 'Slowdive'
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist['Phil Ochs']
  playlist['Phil Ochs']= 'My Bloody Valentine'
}
