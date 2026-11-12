"use client";

import React, { useState } from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { X, Save, RotateCcw, Edit3 } from "lucide-react";

interface PortfolioEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<
    "person" | "skills" | "experience" | "education" | "contact"
  >("person");

  if (!isOpen) return null;

  const handlePersonChange = (
    field: keyof PortfolioData["person"],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      person: {
        ...prev.person,
        [field]: value,
      },
    }));
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...formData.education];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...formData.experience];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const handleContactChange = (
    field: keyof PortfolioData["contact"],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center space-x-2">
            <Edit3 className="w-5 h-5 text-[#F2561D]" />
            <h3 className="font-bold text-lg text-gray-900 font-heading">
              Customize Portfolio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 bg-white px-4 overflow-x-auto scrollbar-none">
          {(["person", "skills", "experience", "education", "contact"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-3.5 text-xs font-bold capitalize transition-colors border-b-2 font-heading whitespace-nowrap ${
                  activeTab === tab
                    ? "border-[#F2561D] text-[#F2561D]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
          {activeTab === "person" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.person.name}
                  onChange={(e) => handlePersonChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Professional Title / Role
                </label>
                <input
                  type="text"
                  value={formData.person.role}
                  onChange={(e) => handlePersonChange("role", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Location & Timezone
                  </label>
                  <input
                    type="text"
                    value={formData.person.location}
                    onChange={(e) => handlePersonChange("location", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Portfolio Year
                  </label>
                  <input
                    type="text"
                    value={formData.person.year}
                    onChange={(e) => handlePersonChange("year", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Professional Summary / Bio
                </label>
                <textarea
                  rows={4}
                  value={formData.person.bio}
                  onChange={(e) => handlePersonChange("bio", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    value={formData.person.email}
                    onChange={(e) => handlePersonChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.person.phone}
                    onChange={(e) => handlePersonChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Live Portfolio URL
                </label>
                <input
                  type="text"
                  value={formData.person.portfolioUrl}
                  onChange={(e) => handlePersonChange("portfolioUrl", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  value={formData.person.githubUrl || "https://github.com/Godwin-WebDev002"}
                  onChange={(e) => handlePersonChange("githubUrl", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500">
                Skills are categorized for modern frontend, backend systems, cloud, and technical SEO.
              </p>
              {Object.entries(formData.skills).map(([catKey, skillList]) => (
                <div key={catKey} className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-1.5">
                  <h4 className="font-bold text-xs uppercase text-gray-700 font-heading">
                    {catKey.replace(/([A-Z])/g, " $1")}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 bg-white border border-gray-200 rounded-md font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4">
              {formData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-xl space-y-2.5 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase text-gray-500 font-heading">
                      Role #{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => handleExperienceChange(idx, "period", e.target.value)}
                      className="text-xs px-2 py-1 border border-gray-200 rounded-md bg-white w-28"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(idx, "company", e.target.value)}
                        className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                        Role Title
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleExperienceChange(idx, "role", e.target.value)}
                        className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                      Outcome Description
                    </label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(idx, "description", e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4">
              {formData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-xl space-y-2.5 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase text-gray-500 font-heading">
                      Education #{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => handleEducationChange(idx, "period", e.target.value)}
                      className="text-xs px-2 py-1 border border-gray-200 rounded-md bg-white w-32"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                      Degree / Certificate
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(idx, "degree", e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(idx, "institution", e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={edu.description}
                      onChange={(e) => handleEducationChange(idx, "description", e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md bg-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Thank You Heading
                </label>
                <input
                  type="text"
                  value={formData.contact.thankYouText}
                  onChange={(e) => handleContactChange("thankYouText", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  References Note
                </label>
                <input
                  type="text"
                  value={formData.contact.references}
                  onChange={(e) => handleContactChange("references", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={() => {
              onReset();
              onClose();
            }}
            className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(formData);
                onClose();
              }}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F2561D] hover:bg-[#D9460F] rounded-lg shadow-md transition-all font-heading"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
