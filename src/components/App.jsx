class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			videoList: exampleVideoData,
			currentVideo: exampleVideoData[0]
		}
	}

	onTitleClick() {
		console.log('worked!')
	}

	render() {
		

		return (
			<div>
			  <Nav />
			  <div className="col-md-7">
			    <VideoPlayer video={this.state.currentVideo}/>
			  </div>
			  <div className="col-md-5">
			    <VideoList onClick={this.onTitleClick.bind(this)} videos={this.state.videoList} />
			  </div>
			</div>
		)
	}
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {exampleVideoData} />
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
