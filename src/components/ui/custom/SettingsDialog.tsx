import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Field, FieldGroup} from "@/components/ui/field.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

const SettingsDialog = () => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Settings</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle>Settings</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Initial Weight 01</Label>
                            <Input
                                id="name-1"
                                name="name"
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                defaultValue="0"
                            />
                        </Field>
                        <Field>
                            <Label htmlFor="name-2">Initial Weight 02</Label>
                            <Input
                                id="name-2"
                                name="name"
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                defaultValue="0"
                            />
                        </Field>
                        <Field>
                            <Label htmlFor="name-3">Initial Bias</Label>
                            <Input
                                id="name-3"
                                name="name"
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                defaultValue="0"
                            />
                        </Field>
                        <Field>
                            <Label htmlFor="name-3">Maximum Calculate Cycles</Label>
                            <Input
                                id="name-3"
                                name="name"
                                type="number"
                                min="1000"
                                max="10000"
                                step="1000"
                                defaultValue="1000"
                            />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default SettingsDialog