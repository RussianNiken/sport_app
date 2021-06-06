<template>
	<div>
		<div class="grid p-5 pb-1"> <!-- NAV START -->
			<div class="col-span-2">
				<h1>Add new workout</h1>
			</div>
			
			<div class="absolute col-auto justify-end right-5 top-5 z-10 closeButton">
				<nuxt-link to="/" prefetch>
					<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 0.28125C10.3008 0.325879 6.76575 1.8152 4.14985 4.4311C1.53395 7.047 0.0446294 10.5821 0 14.2812C0.0446294 17.9804 1.53395 21.5155 4.14985 24.1314C6.76575 26.7473 10.3008 28.2366 14 28.2812C17.6992 28.2366 21.2343 26.7473 23.8501 24.1314C26.466 21.5155 27.9554 17.9804 28 14.2812C27.9554 10.5821 26.466 7.047 23.8501 4.4311C21.2343 1.8152 17.6992 0.325879 14 0.28125ZM22 15.2812H15V22.2812H13V15.2812H6V13.2812H13V6.28125H15V13.2812H22V15.2812Z" fill="#FAFAFA"/>
					</svg>
				</nuxt-link>
			</div>
		</div> <!-- NAV END -->

		<div class="p-5 Main"> <!-- MAIN START -->

			<h2>Weight: (optional)</h2>
			<input v-model="weight" placeholder="kg" />


			<h2>Type of exercise:</h2>
			<select v-model="exercise" required >
				<option v-for="e in exerciseTypes" :key="e.name" :value="e.name">{{e.name}}</option>
			</select>

			<div class="FileUploadContainer">
				<label class="FileUpload" style="width: 250px">
					<input type="file" accept="video/mp4,video/x-m4v,video/*" @change="file_changed()" ref="finput" />
					<p style="margin-bottom: 16px">Upload video</p>
					<svg height="100px" width="100px" viewBox="0 0 24 24" style="fill:#fafafa">
						<path d="M23.2,6c-0.2-0.1-0.4-0.1-0.5,0l-3.5,2.7V7.5c0-1.6-1.3-2.9-2.9-2.9H3.4c-1.6,0-2.9,1.3-2.9,2.9v9c0,1.6,1.3,2.9,2.9,2.9  h12.9c1.6,0,2.9-1.3,2.9-2.9v-1.2l3.5,2.7c0.1,0.1,0.3,0.1,0.5,0c0.2-0.1,0.3-0.2,0.3-0.4V6.4C23.5,6.2,23.4,6.1,23.2,6z"/>
					</svg>
				</label>
				
				<label class="FileUpload" style="width: 250px">
					<input type="file" accept="video/mp4,video/x-m4v,video/*" @change="file_changed()" ref="finput" />
					<p style="margin-bottom: 16px">Scan QR code at the gym</p>
					<svg width="100px" height="100px" viewBox="0 0 24 24" version="1.1" id="svg5" inkscape:version="1.1 (c4e8f9ed74, 2021-05-24)" sodipodi:docname="qr.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<sodipodi:namedview id="namedview7" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:pageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:document-units="mm" showgrid="false" inkscape:zoom="8" inkscape:cx="20.25" inkscape:cy="48.5625" inkscape:window-width="2560" inkscape:window-height="1414" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="layer2" showguides="true" inkscape:guide-bbox="true" width="24mm">
							<sodipodi:guide position="-1.110223e-16,273" orientation="1,0" id="guide19" />
							<sodipodi:guide position="0.23947958,273.00022" orientation="0,-1" id="guide21" />
							<sodipodi:guide position="24.000914,296.4175" orientation="1,0" id="guide23" />
							<sodipodi:guide position="0.55454048,296.99997" orientation="0,-1" id="guide25" />
							</sodipodi:namedview>
						<defs id="defs2" />
						<g inkscape:groupmode="layer" id="layer2" inkscape:label="Capa 2" />
						<g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1">
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.264583" id="rect31" width="8" height="8" x="-1.110223e-16" y="-5.5511151e-17" rx="1" />
							<rect style="fill:#4361ee;fill-rule:evenodd;stroke-width:0.198438" id="rect31-3-62" width="6" height="6" x="1.0583344" y="1.0583344" rx="1" />
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.132292" id="rect31-3-62-2" width="4" height="4" x="2.1166687" y="2.1166687" rx="1" />
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.264583" id="rect31-3-6" width="8" height="8" x="16" y="-5.5511151e-17" rx="1" />
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.264583" id="rect31-3-6-5" width="8" height="8" x="-1.110223e-16" y="16" rx="1" />
							<rect style="fill:#4361ee;fill-rule:evenodd;stroke-width:0.198438" id="rect31-3-62-9" width="6" height="6" x="17.058334" y="1.0583344" rx="1" />
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.132292" id="rect31-3-62-9-3" width="4" height="4" x="18.116669" y="2.1166687" rx="1" />
							<rect style="fill:#4361ee;fill-rule:evenodd;stroke-width:0.198438" id="rect31-3-62-9-1" width="6" height="6" x="1.0583344" y="17.058334" rx="1" />
							<rect style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.132292" id="rect31-3-62-9-1-9" width="4" height="4" x="2.1166687" y="18.116669" rx="1" />
							<rect style="fill:#ffffff;stroke-width:0.241868" id="rect2016" width="3" height="3" x="15.766662" y="15.766667" rx="1" />
							<rect style="fill:#4361ee;stroke-width:0.161245" id="rect2016-6" width="2" height="2" x="16.295828" y="16.295834" rx="1" />
							<rect style="fill:#ffffff;stroke-width:0.0806222" id="rect2016-6-6" width="1" height="1" x="16.824995" y="16.825001" rx="1" />
						</g>
					</svg>
				</label>
			</div>

		</div> <!-- MAIN END -->

	</div>
</template>

<script>

export default {
	data() {
		return {
			exercise: '',
			weight: 0,
			exerciseTypes : [{name:"Squat"}],
			file: {}
		}
	},
	methods: {
		file_changed( ) {
			let reader = new FileReader();
			this.file = this.$refs.finput.files[0];

			reader.readAsArrayBuffer(this.file);

			let that = this;

			reader.onload = function() {
				that.upload(reader.result);
			};

		},
		async upload( data ) {

			let that = this;

			await this.$axios.$post('/api/upload', {
				id: 1,
				date: that.file.lastModifiedDate,
				weight: that.weight,
				video: Buffer.from( data )
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				
			});

		}
	}
}
</script>

<style>

@keyframes rotate-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-135deg);
  }
}

.closeButton {
    animation: rotate-in 1s;
    transform: rotate(-135deg);
}

.Main h2 {
	font-size: 1.2em;
	font-weight: 500;
	margin-top: 1.8em;
}

.Main :is(input,select,option) {
	width: 100%;
	font-size: 12px;
	height: 36px;
	border-radius: 4px;
	color: black;
	background: #fafafa;
	padding: 0 12px;
}

input[type="file"] {
    display: none;
}

.FileUploadContainer {
	display: flex;
    align-content: center;
    justify-content: center;
	height: 30vh;
}

.FileUpload {
	display: flex;
    flex-direction: column;
    align-items: center;
	background: #4361EE;
	border-radius: 10px;
	padding: 2em;
	margin: auto;
}

</style>
