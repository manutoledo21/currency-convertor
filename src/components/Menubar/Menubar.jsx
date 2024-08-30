import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export const MenubarComp = () => {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  )
};

