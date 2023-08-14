/** @format */

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */

import { NextApiRequest, NextApiResponse } from "next";

import { Resend } from "resend";
import Welcome from "@/app/emails/Welcome";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const data = async (request, response) => {
  try {
    const body = await request.json();
    console.log("body", body);

    const {
      firstName,
      lastName,
      dob,
      gender,
      emailData,
      phone,
      isCompany,
      company,
      companyID,
      companyTAX,
    } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "milanpjevic@icloud.com",
      subject: "Upit za saradnju",
      react: Welcome({
        firstName,
        lastName,
        dob,
        gender,
        emailData,
        phone,
        isCompany,
        company,
        companyID,
        companyTAX,
      }),
    });

    console.log("data befroe return: ", data);

    response.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Failed to send email: ${error.message}`);
    }
  }
};
