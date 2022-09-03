
const Login = () =>
{

    

return(
    <>
 
		
	
		
		<div className="d-flex flex-column flex-root" id="kt_app_root"  style={{ backgroundImage: `url("assets/media/auth/bg4.jpg")`, height:'100vh' }}>
			
			{/* <style>body { background-image: url('assets/media/auth/bg4.jpg'); } [data-theme="dark"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }</style>
		 */}
		
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
				
							<form className="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../../demo1/dist/index.html" action="#">
						
								<div className="text-center mb-11">
							
									<h1 className="text-dark fw-bolder mb-3">Sign In</h1>
							
							
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
								
								<div className="fv-row mb-3">
								
									<input type="password" placeholder="Password" name="password" autocomplete="off" className="form-control bg-transparent" />
								
								</div>
							
								<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
									<div></div>
								
									<a href="../../demo1/dist/authentication/layouts/creative/reset-password.html" className="link-primary">Forgot Password ?</a>
								
								</div>
							
								<div className="d-grid mb-10">
									<button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
									
										<span className="indicator-label">Sign In</span>
									
										<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									
									</button>
								</div>
								
								<div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
								<a href="../../demo1/dist/authentication/layouts/creative/sign-up.html" className="link-primary">Sign up</a></div>
							
							</form>
						
						</div>
					
					</div>
				
				</div>
		
			</div>
	
		</div>
	
		<script>var hostUrl = "assets/";</script>
	
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
	
		<script src="assets/js/custom/authentication/sign-in/general.js"></script>
	



   
        
 </>
)
  

}

export default Login