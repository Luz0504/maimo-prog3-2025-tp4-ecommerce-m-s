"use client";

import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

export const CheckoutForm = ({handleAddOrder}) => (
  <div className="px-10">
    <h1 className="text-2xl font-semibold text-fuchsia-700 mb-2">Tus Datos</h1>

    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={(values) => {
        handleAddOrder(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-white mb-1 text-2xl"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              validate={validateEmail}
              placeholder="tu@ejemplo.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.email && touched.email && (
              <div className="text-fuchsia-500 text-sm mt-1">
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-2xl font-medium text-white mb-1"
            >
              Usuario
            </label>
            <Field
              name="username"
              validate={validateUsername}
              placeholder="Nombre de usuario"
              className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.username && touched.username && (
              <div className="text-fuchsia-500 text-sm mt-1">
                {errors.username}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-3xl
             hover:bg-blue-700 transition-colors duration-200 hover:cursor-pointer
             text-2xl"
          >
            Validar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
