"use client";
import { useState } from "react";
import provideIcon from '../../../../utils/provideIcon';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../../ui/card';
import ProfileEditModal, { ProfileField } from './MyProfileNewEdit';

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalFields, setModalFields] = useState<ProfileField[]>([]);
  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("https://github.com/shadcn.png");
  const [avatarFallback, setAvatarFallback] = useState("JC");
  const [singleColumn, setSingleColumn] = useState(false);

  // Profile state
  const [profileData, setProfileData] = useState({
    name: "Jane Cooper",
    role: "User",
    firstName: "Jane",
    lastName: "Cooper",
    email: "alma.lawson@example.com",
    phone: "0198956858448",
    countryCode: "+(353)",
    type: "Donor",
    country: "United Kingdom",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    postalCode: "ERT 0259",
    taxId: "AS5898609",
    passwordLastChanged: "7 days ago",
  });

  const handleEditClick = (
    title: string,
    fields: ProfileField[],
    showAvatarSection = false,
    currentAvatarSrc = "",
    currentAvatarFallback = "U",
    useSingleColumn = false
  ) => {
    setModalTitle(title);
    setModalFields(fields);
    setShowAvatar(showAvatarSection);
    setAvatarSrc(currentAvatarSrc);
    setAvatarFallback(currentAvatarFallback);
    setSingleColumn(useSingleColumn);
    setIsModalOpen(true);
  };

  const handleSave = (data: Record<string, string>) => {
    console.log("Saving profile data:", data);
    // Update profile data state
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }));
    // Here you would typically make an API call to save the data
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="border-0 shadow-none rounded-2xl">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProfilePhotoSection
            onEditClick={handleEditClick}
            name={profileData.name}
            role={profileData.role}
            avatarSrc={avatarSrc}
          />
          <PersonalInformationSection
            onEditClick={handleEditClick}
            firstName={profileData.firstName}
            lastName={profileData.lastName}
            email={profileData.email}
            phone={profileData.phone}
            countryCode={profileData.countryCode}
            type={profileData.type}
          />
          <AddressSection
            onEditClick={handleEditClick}
            country={profileData.country}
            address={profileData.address}
            postalCode={profileData.postalCode}
            taxId={profileData.taxId}
          />
          <PasswordSettingsSection
            onEditClick={handleEditClick}
            lastChanged={profileData.passwordLastChanged}
          />
        </CardContent>
      </Card>

      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        title={modalTitle}
        fields={modalFields}
        showAvatar={showAvatar}
        avatarSrc={avatarSrc}
        avatarFallback={avatarFallback}
        singleColumn={singleColumn}
      />
    </>
  );
}

export default MyProfile;

const ProfilePhotoSection = ({
  onEditClick,
  name,
  role,
  avatarSrc,
}: {
  onEditClick: (
    title: string,
    fields: ProfileField[],
    showAvatar?: boolean,
    avatarSrc?: string,
    avatarFallback?: string,
    useSingleColumn?: boolean
  ) => void;
  name: string;
  role: string;
  avatarSrc: string;
}) => {
  const handleEdit = () => {
    const fields: ProfileField[] = [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        value: name,
        placeholder: "Enter your full name",
        required: true,
      },
      {
        id: "role",
        label: "Role",
        type: "text",
        value: role,
        placeholder: "Enter your role",
        required: true,
      },
    ];

    onEditClick(
      "Edit Profile Photo",
      fields,
      true,
      avatarSrc,
      name.split(' ').map(n => n[0]).join('')
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Photo</CardTitle>
        <CardAction>
          <span
            className="text-sm text-gray-500 flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleEdit}
          >
            Edit {provideIcon({ name: "edit" })}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="size-20">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="text-lg">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PersonalInformationSection = ({
  onEditClick,
  firstName,
  lastName,
  email,
  phone,
  countryCode,
  type,
}: {
  onEditClick: (
    title: string,
    fields: ProfileField[],
    showAvatar?: boolean,
    avatarSrc?: string,
    avatarFallback?: string,
    useSingleColumn?: boolean
  ) => void;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  type: string;
}) => {
  const handleEdit = () => {
    const fields: ProfileField[] = [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        value: firstName,
        placeholder: "Enter your first name",
        required: true,
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        value: lastName,
        placeholder: "Enter your last name",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        value: email,
        placeholder: "Enter your email address",
        required: true,
      },
      {
        id: "countryCode",
        label: "Country Code",
        type: "select",
        value: countryCode,
        placeholder: "Select country code",
        options: [
          { value: "+(1)", label: "+(1) - USA/Canada" },
          { value: "+(44)", label: "+(44) - UK" },
          { value: "+(353)", label: "+(353) - Ireland" },
          { value: "+(91)", label: "+(91) - India" },
          { value: "+(880)", label: "+(880) - Bangladesh" },
        ],
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "text",
        value: phone,
        placeholder: "Enter your phone number",
        required: true,
      },
      {
        id: "type",
        label: "Type",
        type: "select",
        value: type,
        placeholder: "Select type",
        options: [
          { value: "Donor", label: "Donor" },
          { value: "Volunteer", label: "Volunteer" },
          { value: "Staff", label: "Staff" },
          { value: "Admin", label: "Admin" },
        ],
        required: true,
      },
    ];

    onEditClick("Edit Personal Information", fields);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardAction>
          <span
            className="text-sm text-gray-500 flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleEdit}
          >
            Edit {provideIcon({ name: "edit" })}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">First Name</p>
            <h1 className="text-base font-medium text-gray-900">{firstName}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Last Name</p>
            <h1 className="text-base font-medium text-gray-900">{lastName}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Email</p>
            <h1 className="text-base font-medium text-gray-900">{email}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Phone</p>
            <h1 className="text-base font-medium text-gray-900">{countryCode} {phone}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 md:col-span-2">
            <p className="text-xs text-gray-500 mb-1 font-medium">Type</p>
            <h1 className="text-base font-medium text-gray-900">{type}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AddressSection = ({
  onEditClick,
  country,
  address,
  postalCode,
  taxId,
}: {
  onEditClick: (
    title: string,
    fields: ProfileField[],
    showAvatar?: boolean,
    avatarSrc?: string,
    avatarFallback?: string,
    useSingleColumn?: boolean
  ) => void;
  country: string;
  address: string;
  postalCode: string;
  taxId: string;
}) => {
  const handleEdit = () => {
    const fields: ProfileField[] = [
      {
        id: "country",
        label: "Country",
        type: "select",
        value: country,
        placeholder: "Select country",
        options: [
          { value: "United Kingdom", label: "United Kingdom" },
          { value: "United States", label: "United States" },
          { value: "Canada", label: "Canada" },
          { value: "Australia", label: "Australia" },
          { value: "Bangladesh", label: "Bangladesh" },
        ],
        required: true,
      },
      {
        id: "address",
        label: "Address",
        type: "textarea",
        value: address,
        placeholder: "Enter your full address",
        required: true,
      },
      {
        id: "postalCode",
        label: "Postal Code",
        type: "text",
        value: postalCode,
        placeholder: "Enter postal code",
        required: true,
      },
      {
        id: "taxId",
        label: "Tax ID",
        type: "text",
        value: taxId,
        placeholder: "Enter tax ID",
        required: true,
      },
    ];

    onEditClick("Edit Address Information", fields);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address</CardTitle>
        <CardAction>
          <span
            className="text-sm text-gray-500 flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleEdit}
          >
            Edit {provideIcon({ name: "edit" })}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Country</p>
            <h1 className="text-base font-medium text-gray-900">{country}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Address</p>
            <h1 className="text-base font-medium text-gray-900">{address}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Postal Code</p>
            <h1 className="text-base font-medium text-gray-900">{postalCode}</h1>
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
            <p className="text-xs text-gray-500 mb-1 font-medium">Tax ID</p>
            <h1 className="text-base font-medium text-gray-900">{taxId}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PasswordSettingsSection = ({
  onEditClick,
  lastChanged,
}: {
  onEditClick: (
    title: string,
    fields: ProfileField[],
    showAvatar?: boolean,
    avatarSrc?: string,
    avatarFallback?: string,
    useSingleColumn?: boolean
  ) => void;
  lastChanged: string;
}) => {
  const handleEdit = () => {
    const fields: ProfileField[] = [
      {
        id: "currentPassword",
        label: "Current Password",
        type: "password",
        value: "",
        placeholder: "Enter current password",
        required: true,
      },
      {
        id: "newPassword",
        label: "New Password",
        type: "password",
        value: "",
        placeholder: "Enter new password",
        required: true,
      },
      {
        id: "confirmPassword",
        label: "Confirm New Password",
        type: "password",
        value: "",
        placeholder: "Confirm new password",
        required: true,
      },
    ];

    onEditClick("Change Password", fields, false, "", "", true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password Settings</CardTitle>
        <CardAction>
          <span
            className="text-sm text-gray-500 flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleEdit}
          >
            Edit {provideIcon({ name: "edit" })}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
          <p className="text-xs text-gray-500 mb-1 font-medium">Change password</p>
          <h1 className="text-base font-medium text-gray-900">Last Changed {lastChanged}</h1>
        </div>
      </CardContent>
    </Card>
  );
};