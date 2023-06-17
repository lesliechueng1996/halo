import minioClient from '@/lib/storage';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { Blob } from 'buffer';
import { MinioBucket } from '@/lib/constant';
import { updateAvatarById } from '@/dao/UserInfoDao';

export async function POST(
  request: Request,
  { params }: { params: { userInfoId: string } }
) {
  const body = await request.formData();
  const file = body.get('file');
  if (!file) {
    return NextResponse.json({ msg: '请上传图片' }, { status: 400 });
  }
  if (file instanceof Blob) {
    const buffer = Buffer.from(await file.arrayBuffer());

    const mime = file.type;
    const ext = mime.split('/')[1];
    const fileName = `${nanoid()}.${ext}`;

    try {
      minioClient.putObject(MinioBucket.AVATAR, fileName, buffer);
    } catch (e) {
      console.log('upload avatar error', e);
      return NextResponse.json({ msg: '上传图片失败' }, { status: 500 });
    }

    try {
      await updateAvatarById(
        `${MinioBucket.AVATAR}/${fileName}`,
        Number(params.userInfoId)
      );
    } catch (e) {
      return NextResponse.json({ msg: '上传图片失败' }, { status: 500 });
    }

    return NextResponse.json(null);
  }

  console.error('upload avatar error, file is not Blob');
  return NextResponse.json({ msg: '上传图片失败' }, { status: 500 });
}

// export async function GET(
//   request: Request,
//   { params }: { params: { userInfoId: string } }
// ) {
//   const { userInfoId } = params;
//   const userInfo = await getUserInfoById(Number(userInfoId));
//   if (!userInfo) {
//     return NextResponse.json({ msg: '用户不存在' }, { status: 404 });
//   }

//   if (!userInfo.avatar) {
//     return NextResponse.json({ msg: '用户未上传头像' }, { status: 404 });
//   }

//   const avatar = await minioClient.getObject(
//     MinioBucket.AVATAR,
//     userInfo.avatar
//   );

//   const readAvatar = () => {
//     return new Promise((resolve: (buffer: Buffer) => void, reject) => {
//       const chunks: Uint8Array[] = [];
//       avatar.on('data', (chunk) => {
//         chunks.push(chunk);
//       });
//       avatar.on('end', () => {
//         resolve(Buffer.concat(chunks));
//       });
//       avatar.on('error', (err) => {
//         reject(err);
//       });
//     });
//   };

//   try {
//     const buffer = await readAvatar();
//     const response = new Response(buffer);
//     response.headers.set('Content-Type', 'image/jpeg');
//     return response;
//   } catch (e) {
//     console.error('get avatar error', e);
//     return NextResponse.json({ msg: '获取头像失败' }, { status: 500 });
//   }
// }
