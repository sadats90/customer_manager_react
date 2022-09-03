const Register = ()=>
{
 return(
    <>
   
		
		{/* <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-theme-mode")) { themeMode = document.documentElement.getAttribute("data-theme-mode"); } else { if ( localStorage.getItem("data-theme") !== null ) { themeMode = localStorage.getItem("data-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-theme", themeMode); }</script> */}
		
		<div className="d-flex flex-column flex-root" id="kt_app_root" style={{ backgroundImage: `url("assets/media/auth/bg4.jpg")`,height:'100vh' }}>
		
			{/* <style>body { background-image: url('assets/media/auth/bg4.jpg'); } [data-theme="dark"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }</style> */}
		
			<div className="d-flex flex-column flex-column-fluid flex-lg-row">
			
				<div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
					
					<div className="d-flex flex-center flex-lg-start flex-column">
					
						<a href="../../demo1/dist/index.html" className="mb-7">
							<img alt="Logo" src="assets/media/logos/custom-3.svg" />
						</a>
					
						<h2 className="text-white fw-normal m-0">Branding tools designed for your business</h2>
					
					</div>
				
				</div>
				
				<div className="d-flex flex-center w-lg-50 p-10">
		
					<div className="card rounded-3 w-md-550px">
				
						<div className="card-body p-10 p-lg-20">
						
							<form className="form w-100" novalidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="../../demo1/dist/authentication/layouts/creative/sign-in.html" action="#">
							
								<div className="text-center mb-11">
								
									<h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
								
									
									<div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
									
								</div>
								
								<div className="row g-3 mb-9">
								
									<div className="col-md-6">
										
										<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
										
									</div>
								
									<div className="col-md-6">
									
										<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
										<img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
									
									</div>
								
								</div>
								
								<div className="separator separator-content my-14">
									<span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
								</div>
							
								<div className="fv-row mb-8">
								
									<input type="text" placeholder="Email" name="email" autocomplete="off" className="form-control bg-transparent" />
							
								</div>
								
								<div className="fv-row mb-8" data-kt-password-meter="true">
									
									<div className="mb-1">
									
										<div className="position-relative mb-3">
											<input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autocomplete="off" />
											<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
												<i className="bi bi-eye-slash fs-2"></i>
												<i className="bi bi-eye fs-2 d-none"></i>
											</span>
										</div>
									
										<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
										</div>
									
									</div>
									
									<div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
									
								</div>
							
								<div className="fv-row mb-8">
									
									<input placeholder="Repeat Password" name="confirm-password" type="password" autocomplete="off" className="form-control bg-transparent" />
								
								</div>
							
								<div className="fv-row mb-8">
									<label className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" name="toc" value="1" />
										<span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
										<a href="#" className="ms-1 link-primary">Terms</a></span>
									</label>
								</div>
							
								<div className="d-grid mb-10">
									<button type="submit" id="kt_sign_up_submit" className="btn btn-primary">
									
										<span className="indicator-label">Sign up</span>
									
									
										<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									
									</button>
								</div>
							
								<div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
								<a href="../../demo1/dist/authentication/layouts/creative/sign-in.html" className="link-primary fw-semibold">Sign in</a></div>
								
							</form>
						
						</div>
					
					</div>
					
				</div>
			
			</div>
			
		</div>
	
		<script>var hostUrl = "assets/";</script>
		
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
	
		<script src="assets/js/custom/authentication/sign-up/general.js"></script>
	
	
    </>
 )



}

export default Register