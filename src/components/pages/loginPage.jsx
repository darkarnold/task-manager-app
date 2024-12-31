import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";

const LoginPage = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <form>
          <div>
            <Label>Email</Label>
          </div>
        </form>
      </DialogContent>
    </>
  );
};

export default LoginPage;
