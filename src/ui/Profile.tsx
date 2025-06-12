function Profile() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/src/assets/img.jpg"
        alt="Avatar"
        className="h-12 w-12 rounded-full"
      />
      <div className="space-y-0.5">
        <p className="dark:!text-tx-lt-primary text-lg font-semibold">
          Hassnain Raza
        </p>
        <p className="!text-tx-tertary text-sm font-medium">Admin Manager</p>
      </div>
    </div>
  );
}

export default Profile;
