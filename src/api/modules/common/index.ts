/**
 * 通用接口
 */
import type { SendCodeParams, SendCodeResult, UploadImageResult } from '@/api/interface';
import { post, upload } from '@/api';

enum URL {
	upload = '/common/upload',
	sendCode = '/sendCode',
}

// 图片上传
export const uploadImage = (imagePath : string) =>
	upload<UploadImageResult>({ url: URL.upload, filePath: imagePath, name: 'file' });

// 发送验证码
export const sendCode = (data : SendCodeParams) => post<SendCodeResult>({ url: URL.sendCode, data });