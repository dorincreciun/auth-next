"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { useForm } from "@shared/lib/hooks"

import { updateProfileSchema } from "./schema"
import type { UpdateProfileRequest, UpdateProfileResponse } from "./types"
import { updateProfile } from "../api/update-profile"
import { UPDATE_PROFILE_MESSAGES } from "../config/messages"

type UseUpdateProfileOptions = {
  defaultValues?: Partial<UpdateProfileRequest>
}

export const useUpdateProfile = (options?: UseUpdateProfileOptions) => {
  const router = useRouter()

  const defaultValues: UpdateProfileRequest = {
    firstName: options?.defaultValues?.firstName ?? "",
    lastName: options?.defaultValues?.lastName ?? "",
    location: options?.defaultValues?.location ?? "",
    jobTitle: options?.defaultValues?.jobTitle ?? "",
    bio: options?.defaultValues?.bio ?? "",
  }

  return useForm<UpdateProfileRequest, UpdateProfileResponse>({
    onSubmit: (values) => updateProfile(values),
    onSuccess: () => {
      toast.success(UPDATE_PROFILE_MESSAGES.SUCCESS)
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(UPDATE_PROFILE_MESSAGES.ERROR),
    formOptions: {
      mode: "onTouched",
      resolver: zodResolver(updateProfileSchema),
      defaultValues,
    },
  })
}
