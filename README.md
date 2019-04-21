# Highlightr Frontend
Highlightr is a twitch.tv clone with the additional feature of displaying highlights for past broadcasts. Highlights are computed by looking for keywords in the chat data for a VOD as well as the frequency of chat data over time.
Videos, clips, and stream data is fetched through twitch.tv api at https://dev.twitch.tv/docs/api/.

### Demo Video
https://youtu.be/Myr0r7b92r0

### Installation
```
npm i
npm start
```

### Environment Variables
Create .env file containing the following.
```
REACT_APP_CLIENT=YOUR TWITCH CLIENT ID
```

### Directory Structure
```
src/ - All code. Contains folders for redux actions and reducers  and react components.
  actions/ - Redux actions for clips, search, streamer, user, and vod.
  components/ - React components for ChannelCard, ClipCard, Featured, Highlight, LoginForm, Profile, Search, SignupForm, VodCard.
  containers/ - Containers for components. ChannelsContainer, ClipContainer, LoginContainer, ProfileContainer, StreamerContainer, VodContainer, ClipCardsContainer, HomeContainer, NavBar, SignupContainer, VodCardContainer.
  reducers/ - A single index.js handlling reducers for redux.

.env - Environment Variables
```

### Backend
https://github.com/NorbertLam/highlightr-backend
