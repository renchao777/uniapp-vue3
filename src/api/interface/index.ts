// common 
export interface CommonParams {
	[key : string] : any;
}

export interface CommonResult {
	[key : string] : any;
}

export interface UploadImageResult {
	file : string;
	url : string;
}

export interface SendCodeParams {
	phone : number;
	code : number;
}

export interface SendCodeResult {
	code : number;
}

// 返回res.data的interface
export interface IResponse<T = any> {
	code : number | string;
	result : T;
	message : string;
	status : string | number;
}