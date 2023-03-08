interface InfoPanelProps {
}

export function InfoPanel (props: InfoPanelProps) {
  return (
    <div className="bg-gray rounded-md justify-between items-center flex">
        <div className="flex flex-col">
            <p>Contact</p>
                
        </div>
        <div className="flex flex-col">
            <p>Address</p>
            
        </div>
      
    </div>
  );
}
