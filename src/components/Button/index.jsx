import toast from 'react-hot-toast';

export default function Button() {
  const notify = () =>
    toast(
      <div className="max-w-[150px]">
        <p>Leonardo Diman</p>
        <p className="text-ellipsis truncate font-thin text-[14px] w-full">
          Poderia passar na padaria???????????????
        </p>
      </div>,
      {
        icon: (
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src="https://media.licdn.com/dms/image/D4D03AQH1kocLWfiPBw/profile-displayphoto-shrink_800_800/0/1683053737485?e=1693440000&v=beta&t=p80n4fWaZQhZ7cDEyiCaYypJ3KmY0yKXbAj1elLhAek"
            alt="profile pic"
          />
        ),
      }
    );
  return (
    <button
      onClick={notify}
      className="bg-teal-500 px-[16px] py-[8px] rounded-full font-bold text-slate-800 hover:shadow-md opacity-80 hover:opacity-100 duration-150 ease-in-out"
    >
      Mostrar notificação
    </button>
  );
}
