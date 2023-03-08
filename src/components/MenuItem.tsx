import { Button } from "./Button";

interface MenuItemProps {

  itemText : string,
  buttonText : string

}

export const MenuItem = (props: MenuItemProps) => {

  return (
    <div className='bg-primary text-white flex sm:justify-between sm:flex-row flex-col items-center p-5 rounded-lg'>
      <p className='font-bold text-xl p-4'>{props.itemText}</p>
      <Button className='mb-4 sm:m-0' text={props.buttonText}/>
    </div>
  );
}

//the donor portal welcome page will be made from mapping these.

