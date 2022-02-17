// import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div className='flex'>
        <h1 className='text-xl font-bold w-full'>脱毛管理アプリ</h1>
        {/* <div className='flex justify-end w-full'>
          <Link href='/contract'>
            <a className='link link-secondary m-1'>契約内容</a>
          </Link>
          <Link href='/progress'>
            <a className='link link-secondary m-1'>経過観測</a>
          </Link>
        </div> */}
      </div>
      <hr className='mt-5' />
    </>
  );
};
