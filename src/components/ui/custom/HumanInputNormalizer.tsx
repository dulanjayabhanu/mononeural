import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Binary, WandSparkles} from "lucide-react";
import {Field, FieldContent, FieldDescription, FieldLabel, FieldTitle} from "@/components/ui/field.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import useMaxHumanInputValue from "@/hooks/useMaxHumanInputValue.ts";
import useMinHumanInputValue from "@/hooks/useMinHumanInputValue.ts";
import type {HumanInputNormalizerProps} from "@/types/props/HumanInputNormalizerProps.ts";
import minMaxNormalizeConversion from "@/utils/minMaxNormalizeConversion.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import useTargetHumanInputValue from "@/hooks/useTargetHumanInputValue.ts";
import SmoothButton from "@/components/smoothui/smooth-button";
import {useState} from "react";
import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList
} from "@/components/ui/combobox.tsx";
import getHumanInputBooleanValues from "@/constants/getHumanInputBooleanValues.ts";
import useTargetBooleanHumanInputValue from "@/hooks/useTargetBooleanHumanInputValue.ts";
import triggerNotification from "@/services/triggerNotification.ts";

const HumanInputNormalizer = (
    {
        humanInputNormalizerTargetHookProps,
    }: HumanInputNormalizerProps ) => {
    const { maxHumanInputValue, setMaxHumanInputValue } = useMaxHumanInputValue()
    const { minHumanInputValue, setMinHumanInputValue } = useMinHumanInputValue()
    const { targetHumanInputValue, setTargetHumanInputValue } = useTargetHumanInputValue()
    const { targetBooleanHumanInputValue, setTargetBooleanHumanInputValue } = useTargetBooleanHumanInputValue()

    const [ open, setOpen ] = useState<boolean>(false)
    const [ useBoolean, setUseBoolean ] = useState<boolean>(false)

    const humanInputBooleanValues: string[] = getHumanInputBooleanValues()

    const triggerMinMaxNormalization = () => {
        if (useBoolean) {
            humanInputNormalizerTargetHookProps.humanInputNormalizerSetter(targetBooleanHumanInputValue === "True" ? 1 : 0)
        } else {
            humanInputNormalizerTargetHookProps.humanInputNormalizerSetter(
                minMaxNormalizeConversion(
                    maxHumanInputValue,
                    minHumanInputValue,
                    targetHumanInputValue,
                )
            )
        }
        resetMinMaxValues()
        triggerNotification(
            "success",
            "Input normalized and applied successfully",
            "top-center"
        )
    }

    const resetMinMaxValues = () => {
        const {
            maxHumanInputValue: maxHumanInputDefaultValue,
            minHumanInputValue: minHumanInputDefaultValue,
            targetHumanInputValue: targetHumanInputDefaultValue,
            targetBooleanHumanInputValue: targetBooleanHumanInputDefaultValue
        } = getHookDefaultValues()
        setMaxHumanInputValue(maxHumanInputDefaultValue)
        setMinHumanInputValue(minHumanInputDefaultValue)
        setTargetHumanInputValue(targetHumanInputDefaultValue)
        setTargetBooleanHumanInputValue(targetBooleanHumanInputDefaultValue)
        setUseBoolean(false)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    size="xs"
                    variant="outline"
                    className="rounded-full"
                >
                    <WandSparkles />
                    Normalize
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 flex flex-col gap-2 border">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="leading-none font-medium">Input Normalizer</h4>
                        <p className="text-sm text-muted-foreground">
                            Convert your real-world values to the normalized range (0-1) using min-max scaling. Select "Boolean" for true/false inputs.
                        </p>
                    </div>
                    <div>
                        <FieldLabel>
                            <Field orientation="horizontal">
                                <Checkbox
                                    id="toggle-checkbox-2"
                                    name="toggle-checkbox-2"
                                    checked={useBoolean}
                                    onCheckedChange={() =>
                                        setUseBoolean((prevState) => !prevState)
                                    }
                                />
                                <FieldContent>
                                    <FieldTitle>
                                        Use Boolean Value
                                        <Binary size="18"/>
                                    </FieldTitle>
                                    <FieldDescription>
                                        Switch to binary inputs (true = 1, false = 0). Uncheck to return to numeric normalization.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                        </FieldLabel>
                    </div>
                    {useBoolean ? (
                        <div className="grid gap-2">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <Label htmlFor="max-value">Actual Value</Label>
                                <Combobox
                                    items={humanInputBooleanValues}
                                    value={targetBooleanHumanInputValue}
                                    onValueChange={(v) =>
                                        setTargetBooleanHumanInputValue(v || "False")
                                    }
                                >
                                    <ComboboxInput
                                        placeholder={humanInputBooleanValues[0]}
                                        contentEditable={false}
                                        disabled={false}
                                    />
                                    <ComboboxContent>
                                        <ComboboxList>
                                            {(item: string) => (
                                                <ComboboxItem key={item} value={item}>
                                                    {item}
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="max-value">Maximum Value</Label>
                                <Input
                                    type="number"
                                    id="max-value"
                                    value={maxHumanInputValue}
                                    className="col-span-2 h-8"
                                    onChange={(e) =>
                                        setMaxHumanInputValue(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="min-value">Minimum Value</Label>
                                <Input
                                    type="number"
                                    id="min-value"
                                    defaultValue={0}
                                    className="col-span-2 h-8"
                                    onChange={(e) =>
                                        setMinHumanInputValue(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="actual-value">Actual Value</Label>
                                <Input
                                    type="number"
                                    id="actual-value"
                                    value={targetHumanInputValue}
                                    className="col-span-2 h-8"
                                    onChange={(e) =>
                                        setTargetHumanInputValue(Number(e.target.value))
                                    }
                                />
                            </div>
                        </div>
                    ) }
                    <SmoothButton
                        variant="default"
                        onClick={() =>
                            triggerMinMaxNormalization()
                        }
                    >
                        <WandSparkles size="18" />
                        Normalize
                    </SmoothButton>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default HumanInputNormalizer